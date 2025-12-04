import { formatDateTime, formatRelativeTime } from "@/src/utils/format-dateTime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 text-sm"
      title={formatRelativeTime(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
