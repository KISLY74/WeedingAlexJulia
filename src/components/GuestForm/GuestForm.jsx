import { useState } from "react";
import "./GuestForm.scss";

export default function GuestForm() {
  const [guests, setGuests] = useState([{ fullname: "" }]);
  const [attending, setAttending] = useState("");
  const [status, setStatus] = useState("");

  const addGuest = () => {
    setGuests([...guests, { fullname: "" }]);
  };

  const removeGuest = (index) => {
    if (guests.length === 1) return; // не даём удалить последнего
    setGuests(guests.filter((_, i) => i !== index));
  };

  const updateGuest = (index, value) => {
    const updated = [...guests];
    updated[index].fullname = value;
    setGuests(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("attending", attending);
      formData.append("guests", JSON.stringify(guests));

      await fetch(
        "https://script.google.com/macros/s/AKfycbwhh3AQs2UxEtZO64HbWT4qQZrJ8HPlf0jWldvlaEePo8aQzaZirChXzO2OYZymCzAT/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData
        }
      );

      setStatus("success");
      setGuests([{ fullname: "" }]);
      setAttending("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="guest-form">
      <h1>Анкета гостей</h1>

      <form onSubmit={handleSubmit}>
        {guests.map((g, i) => (
          <div className="guest-block" key={i}>
            <label>
              ФИО гостя:
              <input
                type="text"
                value={g.fullname}
                onChange={(e) => updateGuest(i, e.target.value)}
                placeholder="Введите ФИО..."
                required
              />
            </label>

            {guests.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeGuest(i)}
              >
                Удалить
              </button>
            )}
          </div>
        ))}

        <button type="button" className="add-btn" onClick={addGuest}>
          + Добавить гостя
        </button>

        <label className="attending-block">
          Будете ли вы на свадьбе?
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            required
          >
            <option value="">Выберите</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет, к большому сожалению, не сможем</option>
          </select>
        </label>

        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>

      {status === "loading" && <p>Отправка...</p>}
      {status === "success" && <p className="ok">Спасибо! Данные отправлены.</p>}
      {status === "error" && <p className="err">Ошибка отправки.</p>}
    </section>
  );
}
