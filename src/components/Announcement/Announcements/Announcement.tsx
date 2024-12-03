import { AnnouncementCard } from "@/components/Common/Card";
import { AnnouncementData } from "@/data/mockAnnoucementData";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4">
        {AnnouncementData.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            id={announcement.id}
            time={announcement.time}
            description={announcement.description}
            title={announcement.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcement;
