import lespaul from '../assets/img/les-paul.webp';
import sg from '../assets/img/sg.jpg';
import strato from '../assets/img/stratocaster.jpg';
import tele from '../assets/img/telecaster.jpg';
import acoustic from '../assets/img/acoustic.jpg';
import classic from '../assets/img/classic.jpg';

const productos = [
    {
        id: 1,
        model: "Les Paul",
        brand: "Gibson",
        price: "450.000",
        stock: "5",
        category: "eléctricas",
        description: "La Gibson Les Paul es sinónimo de calidad, estilo y sonido inconfundible. Fabricada con materiales de primera clase, su cuerpo de caoba y tapa de arce ofrecen un tono cálido y resonante, mientras que su mástil ergonómico garantiza comodidad en cada acorde. Equipada con pastillas humbucker de alto rendimiento, esta guitarra brinda desde tonos suaves y melódicos hasta potentes riffs de rock. Perfecta para profesionales y amantes de la música, la Les Paul combina tradición, innovación y estética clásica en un instrumento que eleva tu experiencia musical. ¡Hazla tuya y siente la diferencia!",
        img: lespaul
    },
    {
        id: 2,
        model: "SG",
        brand: "Gibson",
        price: "599.999",
        stock: "12",
        category: "eléctricas",
        description: "La Gibson SG es un emblema del rock, reconocida por su diseño distintivo y su impresionante rendimiento. Con un cuerpo de caoba ligero y doble cutaway, ofrece acceso sin esfuerzo a los trastes más altos, ideal para solos electrizantes. Sus pastillas humbucker entregan un tono cálido y poderoso, perfecto para riffs contundentes y melodías expresivas. Diseñada para músicos que buscan comodidad y estilo, la SG combina tradición, versatilidad y un look audaz que no pasa desapercibido. ¡Descubre el sonido y la actitud de una auténtica leyenda con la Gibson SG!",
        img: sg
    },
    {
        id: 3,
        model: "Stratocaster",
        brand: "Fender",
        price: "250.000",
        stock: "8",
        category: "eléctricas",
        description: "La Fender Stratocaster es un clásico atemporal que ha definido generaciones de música. Su diseño ergonómico, con cuerpo de aliso y mástil suave al tacto, ofrece una comodidad inigualable para cualquier estilo. Equipada con tres pastillas single-coil, la Stratocaster brinda una amplia gama tonal, desde limpios cristalinos hasta sonidos llenos de carácter y potencia. Ideal para principiantes y profesionales, esta guitarra combina tradición, innovación y un estilo icónico que la convierte en la elección favorita de los guitarristas de todo el mundo. ¡Lleva tu música al siguiente nivel con la legendaria Stratocaster!",
        img: strato
    },
    {
        id: 4,
        model: "Telecaster",
        brand: "Fender",
        price: "300.000",
        stock: "1",
        category: "eléctricas",
        description: "La Fender Telecaster es el epítome de la simplicidad elegante y el sonido clásico que ha definido generaciones de música. Su diseño sólido y cuerpo de fresno o aliso ofrece resonancia y durabilidad, mientras que su mástil de arce proporciona una experiencia de interpretación cómoda y fluida. Equipada con dos pastillas single-coil, la Telecaster es conocida por su distintivo \"twang\" brillante y su capacidad para adaptarse a géneros que van desde el country hasta el rock y el jazz. Un verdadero ícono de la música, la Telecaster combina tradición, versatilidad y una estética atemporal. ¡Hazte con la guitarra que lo empezó todo!",
        img: tele
    },
    {
        id: 5,
        model: "Acoustic",
        brand: "Takamine",
        price: "190.000",
        stock: "3",
        category: "acústicas",
        description: "La guitarra acústica Takamine es sinónimo de calidad artesanal y proyección sonora excepcional. Diseñada con materiales de primera, como una tapa sólida de abeto y aros y fondo de caoba, ofrece un tono cálido, equilibrado y con una resonancia inigualable. Su diseño ergonómico y acabados impecables brindan comodidad y estilo, ideal para cualquier nivel de guitarrista. Con sistemas de preamplificación de última generación en los modelos electroacústicos, Takamine garantiza un sonido impecable tanto en escenarios como en estudios. ¡Descubre la mezcla perfecta de tradición, innovación y belleza con una guitarra Takamine!",
        img: acoustic
    },
    {
        id: 6,
        model: "Classic",
        brand: "Gracia",
        price: "210.000",
        stock: "2",
        category: "clásicas",
        description: "La guitarra clásica Gracia es una joya para los amantes de la música tradicional. Fabricada con dedicación y materiales de alta calidad, como tapa de abeto o cedro y aros y fondo de palisandro, ofrece un sonido cálido, profundo y con una resonancia auténtica. Su mástil cómodo y suave permite una interpretación fluida, ideal tanto para principiantes como para músicos avanzados. Con un diseño elegante y acabados impecables, las guitarras Gracia son la elección perfecta para quienes buscan calidad, durabilidad y un tono que inspire. ¡Descubre la esencia de la música clásica con una guitarra Gracia!",
        img: classic
    }
]

export default productos;