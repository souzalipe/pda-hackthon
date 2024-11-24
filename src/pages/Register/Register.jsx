import { useRef, useEffect } from "react";
import axios from 'axios';
import './Register.css';

export function Register() {
  const nameRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const descriptionRef = useRef();
  const addressRef = useRef();
  const districtRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const amenitiesRef = useRef();
  const poisRef = useRef();
  const categoryRef = useRef();
  const linkRef = useRef();
  const submitButtonRef = useRef();

  useEffect(() => {
    const button = submitButtonRef.current;
    
    const handleRipple = (event) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    button.addEventListener('click', handleRipple);

    return () => {
      button.removeEventListener('click', handleRipple);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5432/api/hotels/', {
        name: nameRef.current.value,
        latitude: latitudeRef.current.value,
        longitude: longitudeRef.current.value,
        description: descriptionRef.current.value,
        address: addressRef.current.value,
        district: districtRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        country: countryRef.current.value,
        amenities: amenitiesRef.current.value,
        pois: poisRef.current.value,
        category: categoryRef.current.value,
        link: linkRef.current.value,
      });

      [nameRef, latitudeRef, longitudeRef, descriptionRef, addressRef, districtRef, cityRef, stateRef, countryRef, amenitiesRef, poisRef, categoryRef, linkRef].forEach(ref => {
        ref.current.value = '';
      });

      alert('Hospedagem adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar hospedagem:', error);
      alert('Erro ao adicionar hospedagem. Por favor, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <form onSubmit={handleSubmit} className="register-form">
          <h1 className="register-title">Cadastro de Hospedagem</h1>
          
          <div className="input-group">
            <label htmlFor="name" className="input-label">Nome da Hospedagem</label>
            <input id="name" ref={nameRef} placeholder="Digite o nome da hospedagem" required className="input-field" />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="latitude" className="input-label">Latitude</label>
              <input id="latitude" type="number" ref={latitudeRef} step="any" placeholder="Ex: -23.5505" required className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="longitude" className="input-label">Longitude</label>
              <input id="longitude" type="number" ref={longitudeRef} step="any" placeholder="Ex: -46.6333" required className="input-field" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="description" className="input-label">Descrição</label>
            <textarea id="description" ref={descriptionRef} placeholder="Descreva a hospedagem" required className="textarea-field"></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="address" className="input-label">Endereço</label>
            <input id="address" ref={addressRef} placeholder="Endereço completo" required className="input-field" />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="district" className="input-label">Bairro</label>
              <input id="district" ref={districtRef} placeholder="Nome do bairro" required className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="city" className="input-label">Cidade</label>
              <input id="city" ref={cityRef} placeholder="Nome da cidade" required className="input-field" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="state" className="input-label">Estado</label>
              <input id="state" ref={stateRef} placeholder="Nome do estado" required className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="country" className="input-label">País</label>
              <input id="country" ref={countryRef} placeholder="Nome do país" required className="input-field" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="link" className="input-label">Link da Hospedagem</label>
            <input id="link" ref={linkRef} type="url" placeholder="https://exemplo.com" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="category" className="input-label">Categoria</label>
            <input id="category" ref={categoryRef} placeholder="Ex: Hotel, Pousada, Resort" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="amenities" className="input-label">Comodidades</label>
            <input id="amenities" ref={amenitiesRef} placeholder="Ex: Wi-Fi, Piscina, Academia" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="pois" className="input-label">Atividades próximas</label>
            <input id="pois" ref={poisRef} placeholder="Ex: Restaurantes, Praias, Parques" className="input-field" />
          </div>

          <button type="submit" className="submit-button" ref={submitButtonRef}>
            Adicionar Hospedagem
          </button>
        </form>
      </div>
    </div>
  );
}

