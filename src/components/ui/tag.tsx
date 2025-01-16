type TagProps = {
  title: string;
};

export default function Tag(props: TagProps) {
  const { title } = props;

  return (
    <span className="flex items-center rounded-full bg-fuchsia-900/10 px-3 py-1 text-xs font-medium leading-5 text-fuchsia-600">
      {title}
    </span>
  );
}
