import { NavLink } from "react-router-dom";

const sidebarLinks = [
    {
        title: "Figure",
        url: "/management/figures",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M10.5 15.5c0 .37-.1.7-.28 1-.34-.59-.98-1-1.72-1s-1.38.41-1.72 1c-.17-.3-.28-.63-.28-1 0-1.1.9-2 2-2s2 .9 2 2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 01-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73 0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2v-1m-5.5-2.5c-1.1 0-2 .9-2 2 0 .37.11.7.28 1 .34-.59.98-1 1.72-1s1.38.41 1.72 1c.18-.3.28-.63.28-1a2 2 0 00-2-2z" />
            </svg>
        ),
    },
    {
        title: "Category",
        url: "/management/category",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
            </svg>
        ),
    },
    {
        title: "Series",
        url: "/management/series",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6"
            >
                <path d="M7 21h10" />
                <path d="M4 3 H20 A2 2 0 0 1 22 5 V15 A2 2 0 0 1 20 17 H4 A2 2 0 0 1 2 15 V5 A2 2 0 0 1 4 3 z" />
            </svg>
        ),
    },
    {
        title: "Image",
        url: "/management/image",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M15 8h.01" />
                <path d="M7 4 H17 A3 3 0 0 1 20 7 V17 A3 3 0 0 1 17 20 H7 A3 3 0 0 1 4 17 V7 A3 3 0 0 1 7 4 z" />
                <path d="M4 15l4-4a3 5 0 013 0l5 5" />
                <path d="M14 14l1-1a3 5 0 013 0l2 2" />
            </svg>
        ),
    },
    {
        title: "User",
        url: "/management/user",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
    {
        title: "Logout",
        url: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
            </svg>
        ),
        // onClick: () => signOut(auth),
    },
];

const SidebarAdmin = () => {
    const sidebarItemClassName =
        "flex items-center gap-5 px-5 py-4 font-medium rounded";
    return (
        <div className="flex flex-col gap-3 py-5 bg-white rounded-lg shadow-md">
            {sidebarLinks.map((item) => (
                <NavLink
                    to={item.url}
                    key={item.title}
                    className={({ isActive }) => {
                        return isActive
                            ? sidebarItemClassName + " bg-primary text-white"
                            : sidebarItemClassName + " text-grayDark";
                    }}
                >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default SidebarAdmin;
