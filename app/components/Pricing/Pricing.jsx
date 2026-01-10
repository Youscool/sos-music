"use client"
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <Container>
        <h2 className={styles.title}>Nos tarifs d’enregistrement</h2>

        {/* Infos haut */}
        <Row className="mb-4">
          <Col md={6}>
            <div className={styles.infoBox}>
              <span className={styles.dot}></span>
              <p>
                <strong>ENREGISTREMENT NUMÉRIQUE</strong><br />
                Uniquement avec les plugins UAD<br />
                Chaîne vocale à <strong>30.000 FCFA</strong>
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.infoBox}>
              <span className={styles.dot}></span>
              <p>
                <strong>ENREGISTREMENT ANALOGIQUE</strong><br />
                Preamp Neve 1073 + Compresseur CL2A & CL1B + U87<br />
                Chaîne vocale à <strong>100.000 FCFA</strong>
              </p>
            </div>
          </Col>
        </Row>

        {/* Tableau */}
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>Type de Micro</div>
            <div>Tarif numérique<br />2 heures</div>
            <div>Tarif analogique<br />NEVE 1073 + CMP / 2h</div>
            <div>Services</div>
          </div>

          {rows.map((row, i) => (
            <div className={styles.tableRow} key={i}>
              <div>
                <strong>{row.mic}</strong><br />
                <small>{row.value}</small>
              </div>
              <div>{row.digital}</div>
              <div>{row.analog}</div>
              <div>{row.service}</div>
            </div>
          ))}
        </div>

        {/* Services bas */}
        <div className={styles.extra}>
          <p>• Service mixage d’un projet : <strong>30.000 FCFA</strong> / Analogique : <strong>50.000 FCFA</strong></p>
          <p>• Service mastering d’un projet : <strong>30.000 FCFA</strong> / Analogique : <strong>50.000 FCFA</strong></p>
        </div>

        <p className={styles.note}>
          NB : Le service analogique est fait avec les vrais appareils.
          Le standard de l’industrie partout dans le monde.
        </p>
      </Container>
    </section>
  );
}

const rows = [
  {
    mic: "RODE NT1 5e Génération",
    value: "(Valeur 350€)",
    digital: "40.000 FCFA",
    analog: "60.000 FCFA",
    service: "REC + MIX + MASTER",
  },
  {
    mic: "AKG C414",
    value: "(Valeur 1.400€)",
    digital: "60.000 FCFA",
    analog: "80.000 FCFA",
    service: "REC + MIX + MASTER",
  },
  {
    mic: "NEUMANN TLM 103",
    value: "(Valeur 1.300€)",
    digital: "60.000 FCFA",
    analog: "80.000 FCFA",
    service: "REC + MIX + MASTER",
  },
  {
    mic: "NEUMANN U87 Legendary",
    value: "(Valeur 3.500€)",
    digital: "80.000 FCFA",
    analog: "100.000 FCFA",
    service: "REC + MIX + MASTER",
  },
];
