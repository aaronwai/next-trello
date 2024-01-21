import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
const OrganizationIdPage = () => {
  return (
    <div>
      <form action={create}>
        <input
          className='border-black border p-1'
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};
export default OrganizationIdPage;
