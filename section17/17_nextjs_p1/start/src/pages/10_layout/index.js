import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/10_layout/layout1">
          <a>レイアウト１</a>
        </Link>
      </li>
      <li>
        <Link href="/10_layout/layout2">
          <a>レイアウト２</a>
        </Link>
      </li>
    </ul>
  );
}
