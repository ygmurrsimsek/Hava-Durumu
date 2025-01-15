import Header from '../components/Header';

function HomePages() {
    return (
        <div style={{ padding: '0px', margin: '0px', textAlign: 'center' }}>
            <h1
                style={{
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '2rem',
                    margin: 0,
                    paddingBottom: '150px',
                    paddingTop: '30px'
                }}>
                Hava Durumu Uygulaması
            </h1>
            <Header style={{ marginTop: '50px' }} /> {/* Ortada konumlandırmak için margin */}
        </div>
    );
}

export default HomePages;
