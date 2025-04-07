import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap
import imagen from './1.jpg';
import imagen2 from './2.jpg';
import imagen5 from './5.png';
import imagen3 from './3.jpg';
import imagen7 from './6.jpg';
import imagen6 from './7.jpg';
import imagen4 from './4.jpg';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [seccion, setSeccion] = useState("");

  const renderContenido = () => {
    switch (seccion) {
      case "aplicacion":
        return (
          
          <div>
            <h2>Aplicación de la IA</h2>
            <img src={imagen4} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />  

            <p>Las aplicaciones de Inteligencia Artificial (IA) son programas de software que usan técnicas de IA para realizar tareas específicas. Estas pueden variar desde tareas simples y repetitivas hasta tareas cognitivas complejas que requieren inteligencia similar a la humana.</p>
            <p>La IA tiene muchas aplicaciones, por ejemplo:</p>
            <p><strong>IA en inteligencia empresarial</strong></p>
            <p>La IA desempeña un papel cada vez más importante en la inteligencia empresarial (IE). Las herramientas de IE potenciadas por IA pueden ayudar a las empresas a recopilar, analizar y visualizar datos de manera más eficiente y eficaz. Esto puede mejorar la toma de decisiones, aumentar la productividad y reducir los costos.</p>
            <p><strong>IA en los servicios de salud</strong></p>
            <p>La IA también está desempeñando un papel cada vez más importante en la atención médica. Las herramientas potenciadas por IA pueden ayudar a los médicos a diagnosticar enfermedades, desarrollar nuevos tratamientos y proporcionar atención personalizada a los pacientes.</p>
            <p><strong>IA en la educación</strong></p>
            <p>La IA podría usarse en la educación para personalizar el aprendizaje, mejorar la participación de los alumnos y automatizar tareas administrativas para las instituciones educativas y otras organizaciones.</p>
            <img src={imagen} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />           
           
             </div>
      );
      case "origen":
        return (
          <div>
            <h2>Origen del término "IA"</h2>
            <p>El término "Inteligencia Artificial" fue acuñado por John McCarthy en 1956 durante la conferencia de Dartmouth.</p>
            <img src={imagen2} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />            
            <p>La inteligencia artificial IA es una tecnología que simula procesos de inteligencia humana mediante sistemas informáticos. Su objetivo no es crear conocimiento nuevo, sino recopilar y procesar datos para tomar decisiones. 
            Se basa en tres pilares fundamentales datos, hardware y software. Los algoritmos de IA siguen reglas lógicas o patrones similares al pensamiento humano como el deep learning.</p>
            <p>Aunque la idea de máquinas inteligentes existe desde la antigüedad, la IA comenzó a desarrollarse formalmente en el siglo XX. En 1943, McCulloch y Pitts crearon un modelo de neuronas artificiales.
             En 1950, Alan Turing propuso el Test de Turing para determinar si una máquina puede pensar. El término “inteligencia artificial” fue acuñado por John McCarthy en 1956, quien también desarrolló el lenguaje de programación LISP.</p>
             <img src={imagen5} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />            
             <p>Durante las décadas siguientes, la IA evolucionó con mejoras en algoritmos, computación y aprendizaje automático. A partir de los años 90, el aumento de datos y potencia de cómputo aceleró su avance. En los últimos años, el desarrollo del aprendizaje profundo ha permitido
             grandes avances en reconocimiento de voz e imágenes, lenguaje natural y sistemas autónomos, posicionando a la IA como una herramienta clave de la Cuarta Revolución Tecnológica.</p> 
            </div>
        );
      case "ventajas":
        return (
          <div>
            <h2>Ventajas</h2>
            <ul>
              
              <p>No cabe duda de que la inteligencia artificial para las empresas está cambiando la forma en que estas operan y está haciendo partícipe a la tecnología en la toma de decisiones y en la automatización de tareas. </p>
              <p>A continuación, vamos a ver las principales ventajas de la IA.</p>
              <p>Automatización de procesos</p>

                <p>Uno de los usos principales de la inteligencia artificial es la automatización, puesto que los sistemas y robots ejecutan tareas repetitivas con mayor precisión y eficiencia que los humanos. 

                Su implementación reduce tiempos, minimiza errores y optimiza el uso de recursos. Por tanto, se reducen los costes operativos. Y con el análisis de datos en tiempo real, estos sistemas se 
                adaptan y mejoran de forma constante. Además de que la productividad se ve impulsada, también se fomenta la innovación en múltiples sectores. </p>
                <p>Menor intervención humana</p>

              <p>Otra de las ventajas de la IA es que, al asumir tareas rutinarias, los humanos se liberan de las actividades repetitivas y se pueden centrar en tareas estratégicas y creativas. Con este cambio, el entorno laboral se vuelve más dinámico 
              y se favorece el desarrollo de habilidades analíticas y de innovación. 

              Lejos de reemplazar al talento humano, la IA es un aliado que potencia nuestra capacidad para resolver problemas complejos y generar valor en las empresas. </p>
              <p>Resultados más precisos</p>

              <p>Los sistemas basados en inteligencia artificial son capaces de procesar grandes volúmenes de información y detectar patrones que pasan desapercibidos para el ojo humano. En medicina, por ejemplo, los algoritmos analizan imágenes médicas con una 
                precisión que supera la de los especialistas. Gracias a ello, se reduce el margen de error en los diagnósticos. En otros sectores, también se minimiza dicho margen, pero también se mejora la exactitud de los procesos.</p>

             <p>Los errores humanos se reducen al máximo</p>
             <p> Los fallos en aquellas tareas que implican precisión pueden generar pérdidas económicas y riesgos importantes. Por suerte, la IA ayuda a reducir estos errores al máximo. En la fabricación industrial, se garantizan estándares de calidad muy altos porque los
               sistemas de visión por ordenador inspeccionan productos con un nivel de detalle que es inviable para los humanos. Esta combinación de IA y supervisión humana mejora la seguridad, la eficiencia y la fiabilidad.</p>

            </ul>
            <img src={imagen3} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '600px' }} />            
            </div>
        );
      case "desventajas":
        return (
          <div>
            <h2>Desventajas</h2>
            <ul>
            <img src={imagen7} alt="Inteligenci Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />            
            <p>Hemos visto que la lista de ventajas de la IA es muy extensa. No obstante, no siempre es percibida como una herramienta 
             revolucionaria que nos permite avanzar. También hay quienes la siguen viendo como una amenaza al empleo, la privacidad y la ética. </p>
            <p>Falta de datos</p>

            <p>La IA se sirve de datos, y para funcionar correctamente, deben ser volúmenes muy grandes y de calidad. Sin embargo, en muchos casos los datos 
            son insuficientes, incompletos o están fragmentados, por lo que se limita su capacidad de aprendizaje. Además, dado que no hay estándares en la recopilación y organización de datos, se dificulta su integración en diferentes sistemas y se reduce la efectividad de la IA en la toma de decisiones. </p>
            <p>Falta de profesionales</p>

            <p>Otra de las desventajas de la IA es la falta de profesionales. La demanda de especialistas en inteligencia artificial crece más rápido que la formación que se ofrece. Aunque cada vez hay más programas educativos en este campo, como el Máster de Inesdi, sigue existiendo escasez de expertos que sean capaces 
              de desarrollar, implementar y supervisar sistemas de IA. La falta de talento cualificado ralentiza la adopción de esta tecnología y genera una brecha entre las necesidades del mercado y las habilidades disponibles. </p>
           
              <img src={imagen6} alt="Inteligencia Artificial" className="img-fluid rounded mb-4 shadow-lg" style={{ maxHeight: '400px' }} />            
  
            <p>Altos costos</p>

            <p>Para poder desarrollar e implementar soluciones basadas en inteligencia artificial se necesita una inversión considerable en hardware, software y talento humano. Las pequeñas y medianas empresas no pueden asumir estos costes, por lo que se limita el acceso a la tecnología. Además, los modelos de IA requieren 
            actualizaciones constantes y un mantenimiento continuo, que supone un gasto adicional a largo plazo. </p>
           <p>Miedo a la pérdida de empleos</p>

            <p>La automatización de tareas mediante IA está teniendo un impacto en el mercado laboral. Si bien esta tecnología mejora la productividad, también desplaza a los trabajadores al poder encargarse de sus tareas. Todavía hoy nos faltan estrategias para la reconversión laboral y la capacitación en nuevas habilidades, 
          de ahí que exista temor a la pérdida de oportunidades de empleo. </p>
            </ul>
          </div>
        );
      default:
        return <p>Por favor haz clic en un botón de tu elección para ver el contenido.</p>;
    }
  };

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial", backgroundColor: "#000000", color: "white", minHeight: "100vh" }}>
      <h1 className="text-center mb-4" style={{ color: "#ff66b2" }}>Inteligencia Artificial</h1>
      <div style={{ textAlign: 'center' }}>
        <button 
          className="btn btn-outline-light btn-lg mx-3 my-2" 
          onClick={() => setSeccion("aplicacion")}
          style={{ fontSize: "18px", padding: "15px 30px", borderRadius: "10px", backgroundColor: "#ff66b2", border: "none" }}>
          Aplicación de la IA
        </button>
        <button 
          className="btn btn-outline-light btn-lg mx-3 my-2" 
          onClick={() => setSeccion("origen")}
          style={{ fontSize: "18px", padding: "15px 30px", borderRadius: "10px", backgroundColor: "#ff66b2", border: "none" }}>
          Origen del término "IA"
        </button>
        <button 
          className="btn btn-outline-light btn-lg mx-3 my-2" 
          onClick={() => setSeccion("ventajas")}
          style={{ fontSize: "18px", padding: "15px 30px", borderRadius: "10px", backgroundColor: "#ff66b2", border: "none" }}>
          Ventajas
        </button>
        <button 
          className="btn btn-outline-light btn-lg mx-3 my-2" 
          onClick={() => setSeccion("desventajas")}
          style={{ fontSize: "18px", padding: "15px 30px", borderRadius: "10px", backgroundColor: "#ff66b2", border: "none" }}>
          Desventajas
        </button>
      </div>

      <hr style={{ borderColor: "#ff66b2" }} />

      <div>{renderContenido()}</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));  //  id="root" en tu HTML
root.render(<App />);