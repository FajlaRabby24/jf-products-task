import image1 from "../../assets/images/LandscapeProduct1.png";
import image2 from "../../assets/images/LandscapeProduct2.png";
import image3 from "../../assets/images/LandscapeProduct3.png";
import image4 from "../../assets/images/LandscapeProduct4.png";
import Container from "../common/Container";

const products = [
  {
    id: 1,
    name: "JF Barbed Wire – 270 GSM",
    price: "৳4,995.00",
    oldPrice: "৳5,995.00",
    image: image1,
  },
  {
    id: 2,
    name: "FGC RustFree Fencing Poles",
    price: "৳4,950.00",
    oldPrice: "৳5,950.00",
    image: image2,
  },
  {
    id: 3,
    name: "GI Poultry Mesh",
    price: "৳1,260.00 – ৳9,750.00",
    image: image3,
  },
  {
    id: 4,
    name: "JF Bluelink Mesh",
    price: "৳3,057.50 – ৳8,365.50",
    image: image4,
  },
];

const LandscapeProducts = () => {
  return (
    <Container className="text-2xl md:text-3xl font-bold mb-6">
      <h2 className="section-title mb-6">Landscape Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="card rounded-2xl bg-secondary  shadow-sm"
          >
            <figure className="p-2">
              <img
                className="w-full object-cover"
                src={product.image}
                alt={product.name + "image"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              <div className="card-actions ">
                <button className="btn btn-primary text-black rounded-full px-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LandscapeProducts;
