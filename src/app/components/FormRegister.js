'use client';

import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styles from '../styles/FormRegister.module.css';

export default function FormRegister({ onRegister }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    departamento: '',
    ciudad: '',
    celular: '',
    email: '',
    habeasData: false,
  });

  const departamentos = ['Bogotá', 'Antioquia', 'Cundinamarca', 'Boyacá', 'Caldas', 'Huila', 'Bolívar', 'Atlantico', 'Valle'];
  const ciudades = {
    Bogotá: ['Bogotá'],
    Antioquia: ['Medellín', 'Envigado'],
    Cundinamarca: ['Soacha', 'Zipaquirá', 'Chía', 'Cajicá', 'Cota'],
    Boyacá: ['Tunja'],
    Caldas: ['Manizales'],
    Huila: ['Neiva'],
    Bolívar: ['Cartagena'],
    Atlantico: ['barranquilla'],
    Valle: ['cali'],

  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Registro de Usuario</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formNombre">
            <Form.Label className={styles.label}>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              className={styles.formControl}
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formApellido">
            <Form.Label className={styles.label}>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              className={styles.formControl}
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formCedula">
        <Form.Label className={styles.label}>Cédula</Form.Label>
        <Form.Control
          type="number"
          name="cedula"
          className={styles.formControl}
          value={formData.cedula}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDepartamento">
        <Form.Label className={styles.label}>Departamento</Form.Label>
        <Form.Select
          name="departamento"
          className={styles.formControl}
          value={formData.departamento}
          onChange={handleInputChange}
          required
        >
          <option value="" className='bg-info'>Seleccione un departamento</option>
          {departamentos.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {formData.departamento && (
        <Form.Group controlId="formCiudad">
          <Form.Label className={styles.label}>Ciudad</Form.Label>
          <Form.Select
            name="ciudad"
            className={styles.formControl}
            value={formData.ciudad}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione una ciudad</option>
            {ciudades[formData.departamento].map((ciudad) => (
              <option key={ciudad} value={ciudad}>
                {ciudad}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      <Form.Group controlId="formCelular">
        <Form.Label className={styles.label}>Celular</Form.Label>
        <Form.Control
          type="number"
          name="celular"
          className={styles.formControl}
          value={formData.celular}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label className={styles.label}>Correo Electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          className={styles.formControl}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formHabeasData" className={styles.habeasData}>
        <Form.Check
          type="checkbox"
          name="habeasData"
          label="Autorizo el tratamiento de mis datos personales."
          checked={formData.habeasData}
          className={styles.formCheckInput}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button type="submit" className={styles.submitBtn}>
        Registrarse
      </Button>
    </Form>
  );
}
