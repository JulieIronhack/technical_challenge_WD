export default function Phone(props) {
    
    return (
        <section className="phone">
          <h2>{props.phone.name}</h2>
          {props.image(props.phone.imageFileName)}
        </section>
      );
}