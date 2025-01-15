import AppRoutes from './routes/AppRoutes.jsx';
import myImage from './assets/images/Homeİmage.png';
import Header from './components/Header.jsx';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Arka Plan */}
      <div
        style={{
          backgroundImage: `url(${myImage})`,
          margin: '0px',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',  // Arka plana bulanıklık ekle
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,  // Arka planda olmasını sağlar
        }}
      />

      {/* İçerik kısmı */}
      <AppRoutes />

    </div>
  );
}

export default App;
