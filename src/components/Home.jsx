import PageHeader from "./common/PageHeader.jsx";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          <h1>Welcome to my gallery</h1>
          My<i class="bi bi-image-fill"></i>Gallery
        </>
      }
      description={
        "You have reached the home page, here you will receive information on how to add a photo to your gallery!"
      }
    />
  );
};
export default Home;
