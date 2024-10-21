import Header from './Header';
import BookingForm from './BookingForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;