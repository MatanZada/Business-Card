import { Link } from "react-router-dom";
import PageHeader from "./common/PageHeader";
const MyCards = () => {
  return (
    <>
      <PageHeader title="My Cards" description="your cards are in list below" />
      <div className="row">
        <Link to="create-card">Create a new card</Link>
      </div>
    </>
  );
};

export default MyCards;
