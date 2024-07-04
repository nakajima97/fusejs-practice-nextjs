import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h4>ページ一覧</h4>
      <ul>
        <li>
          <Link href="/employees">従業員一覧</Link>
        </li>
      </ul>
    </main>
  );
}
