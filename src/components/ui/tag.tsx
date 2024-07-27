type TagProps = {
  title: string;
};

export default function Tag(props: TagProps) {
  const { title } = props;

  return (
    <span className="flex items-center rounded-full bg-[#FEE715]/10 px-3 py-1 text-xs font-medium leading-5 text-[#FEE715]">
      {title}
    </span>
  );
}
