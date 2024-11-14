export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
}
