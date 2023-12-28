function Profile() {
  return (
    <img
      src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Allujain Bakery"
      style={{width: '900px', height: '700px'}}
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Allujain Bakery</h1>
      <p>this is a bakery</p>
      <Profile />
    </section>
  );
}




