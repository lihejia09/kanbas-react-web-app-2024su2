import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
export default function PeopleDetails({ fetchUsers }:
    { fetchUsers: () => void; }
) {

    const { uid, courseID } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [editing, setEditing] = useState(false);

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setRole(user.role);
        setEmail(user.email);
    };

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, role, email };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${courseID}/People`);
    };

    const navigate = useNavigate();
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${courseID}/People`);
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;
    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <Link to={`/Kanbas/Courses/${courseID}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </Link>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div><hr />
            <div className="text-danger fs-4 wd-name">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2" />
                )}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2" />
                )}
                {!editing && (
                    <div onClick={() => setEditing(true)}>{user.firstName} {user.lastName}</div>
                )}
                {user && editing && (
                    <input className="form-control w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName} `}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }}
                    />
                )}
            </div>
            <b>Role:</b>
            {editing ? (
                <select
                    className="form-select wd-roles w-50"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="STUDENT">Student</option>
                    <option value="TA">TA</option>
                    <option value="FACULTY">Faculty</option>
                </select>
            ) : (
                <span className="wd-roles">
                    {user.role}
                </span>
            )}
            <br />
            <b>Login ID:</b>
            <span className="wd-login-id">
                {user.loginId}
            </span>
            <br />
            <b>Section:</b>
            <span className="wd-section">
                {user.section}
            </span> <br />
            <b>Email:</b>
            {editing ? (
                <input
                    type="email"
                    className="form-control w-50"
                    defaultValue={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { saveUser(); }
                    }}
                />
            ) : (
                <span className="wd-email">
                    {user.email}
                </span>
            )}
            <br />

            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
            <button onClick={() => navigate(`/Kanbas/Courses/${courseID}/People`)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
        </div>);
}