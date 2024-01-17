export default function WrapContent(props: {
  title: string;
  subtitle: string;
}) {
  const { title, subtitle } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-[1500px] pt-5">{title}</div>
    </div>
  );
}
