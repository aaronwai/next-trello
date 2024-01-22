import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";

const OrganizationIdPage = async () => {
  return (
    <div className='flex flex-col space-y-4'>
      <Info />
      <Separator className='my-4' />
      <BoardList />
    </div>
  );
};
export default OrganizationIdPage;
