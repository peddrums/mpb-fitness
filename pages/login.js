import Link from "next/link";

export default function Login() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/api/auth/login" passhref>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/api/auth/logout" passhref>
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
