# Universidad Autonoma de Baja California Sur
<p align="center">
  <img height="300" src="img/uabcs.png">
</p>

# Ingenieria en Desarrollo de Software 9no Semestre
# Perceptrón sencillo para separar dos conjuntos de puntos.

Instrucciones: Construir en su lenguaje de preferencia, un perceptrón que aprenda a separar dos conjuntos de puntos en el plano, como se vio en clase.

    - Adan Enrique Ramirez Cisneros
    - 29 de Octubre del 2021

## Archivos de Funcionamiento
    - objects/ball.js
    - objects/neuro.js
    - sketch.js


# Gif del funcionamiento del perceptron

<p align="center">
  <img height="600" src="img/perceptron.gif">
</p>

## Link del percerceptron en funcionamiento
URL: https://katzunestarky.github.io/Perceptron-Simple/

## Neuron.js (js/objects/neuron.js)
    La neurona en cuestion recibe el parametro que se le da sobre la tasa de aprendizaje asignada manualmente, siendo esta instanciada se le asignan pesos en un array de los cuales los primeros son las posiciones del array mencionado, y por ultimo el bias

```js
    class neurona{
        constructor(knowledgeRate){
            this.weights = [0.5, 0.5, 0.5];
            this.alpha = knowledgeRate;
        }
    }
```

Para hacer aprender a nuestro perceptron se utilizo la siguiente formula (usando la funcion classify dentro de neuron.js):

```js
    aprendiendo(x, y, isRight) {
        let val = this.classify(x, y);
        let error = isRight - val;
        this.weights[0] = this.weights[0] + this.alpha * error * x;
        this.weights[1] = this.weights[1] + this.alpha * error * y;
        this.weights[2] = this.weights[2] + this.alpha * error;
      }
```

## Ball.js (js/objects/ball.js)

Esta clase se usa para definir los puntos que se crearan en el canvas el cual pinta los circulos. 