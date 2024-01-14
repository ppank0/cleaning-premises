import Footer from "../components/Footer";

const UserProfile = () => {
    return ( 
        <>
            <div class="container " style={{minHeight: '60vh'}}>
            <h1 class="text-center mt-5">ПРОФИЛЬ</h1>
            <div class="d-flex justify-content-center mt-5">
            <a href="report.pdf" class="btn btn-outline-secondary ">Скачать отчет об уборке (PDF)</a>
            <a href="report.docx" class="btn btn-outline-secondary ms-2">Скачать отчет об уборке (DOCX)</a>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default UserProfile;