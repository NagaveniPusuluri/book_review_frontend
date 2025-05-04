import React from "react";
import Bookcard from "./Bookcard";
import HomeCss from './Home.module.css';
import { useBookContext } from "./assets/Contexts/bookContext";
import Nav from "./Nav";
import Logout from "./Logout";
const Home = () => {
    const { bookDetails } = useBookContext();

    // const { isLoggedIn } = useAuth();  
    //  const navigate = useNavigate(); 

    //   useEffect(() => {
    //     if (!isLoggedIn) {
    //      navigate('/login'); 
    //      }
    //    }, [isLoggedIn, navigate]);

    return (
        <div className={HomeCss.main}>
            <Nav>
                <Logout />
            </Nav>
            <div className={HomeCss.cardContainer}>
                {bookDetails.map((book) => {
                    return (
                        <Bookcard key={book.id} image={book.image} title={book.title} authors={book.authors} />
                    )
                })}
            </div>
        </div>
    )
}
export default Home