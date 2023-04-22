import desenvolvedor from "../assets/desenvolvedor.png"; 
const Images = () => {

    return (
        <div>
            <img src="/tecnologia.jpg" alt="tech"/>
            <img src={desenvolvedor} alt="programador"/>
        </div>
    )
}

export default Images;
