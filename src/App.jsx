import { Banners } from './components/section_1';
import { Footer } from './components/Footer';
import { InfoCards } from "./components/InfoCards";
import { DetailPack } from "./components/DetailPack";
import { InfoLists } from './components/InfoLists';
import { InfoText } from './components/InfoText';
import { InfoPhotosCards } from './components/InfoPhotosCards';

function App (){
    return(
        < >
            <div className="container">
                <Banners/>    
                <InfoCards/>  
                <DetailPack />
                <InfoLists/>
                <InfoText/>
                <InfoPhotosCards/>
            </div>
            <Footer />  
        </>
    )
}

export default App;
