import PhoneCard from "../components/PhoneCard";

function HouseListPage(props) {
  return (
    <>
      {props.phonesList && props.phonesList.length >= 1 ? (
        props.phonesList.map((phone) => (
          <PhoneCard key={phone._id} {...phone} />
        ))
      ) : (
        <h1>There are no phones available</h1>
      )}
    </>
  );
}

export default HouseListPage;
