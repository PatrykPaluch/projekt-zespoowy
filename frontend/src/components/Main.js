import './Main.css';

function Main() {
  return (
    <main>
        <section className="Notifications">
            <h2>Ogłoszenia</h2>
            <div className="Notification">
                <h2>Pierwsze ogłoszenie</h2>
                <p> Sprawdzian jutro</p>
            </div>
            <div className="Notification">
                <h2>Drugie ogłoszenie</h2>
                <p>Wycieczka sie nie odbedzie</p>
            </div>
            <div className="Notification">
                <h2>Pierwsze ogłoszenie</h2>
                <p> Sprawdzian jutro</p>
            </div>
            <div className="Notification">
                <h2>Drugie ogłoszenie</h2>
                <p>Wycieczka sie nie odbedzie</p>
            </div>
        </section>
        <section className="Timetables">
            <h2>Wydarzenia</h2>
            <div className="Timetable">
                <h1>Wydarzenie 1</h1>
            </div>
            <div className="Timetable">
                <h1>Wydarzenie 2</h1>
            </div>
            <div className="Timetable">
                <h1>Wydarzenie 3</h1>
            </div>
            <div className="Timetable">
                <h1>Wydarzenie 4</h1>
            </div>
        </section>
    </main>
  );
}

export default Main;
