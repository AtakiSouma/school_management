interface CustomerAnnouncementCardProps {
  id: number;
  title: string;
  time: string;
  description: string;
}

const CustomerAnnouncementCard: React.FC<CustomerAnnouncementCardProps> = ({
  title,
  id,
  time,
  description,
}) => {
  return (
    <div
      className="odd:bg-lamaPurpleLight even:bg-lamaYellowLight rounded-md p-4 text-[12px] "
      key={id}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-gray-600">{title}</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
          {time}
        </span>
      </div>
      <p className="text-small text-gray-400 ">{description}</p>
    </div>
  );
};

export default CustomerAnnouncementCard;
