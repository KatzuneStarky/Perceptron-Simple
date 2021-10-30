class neurona{
    constructor(knowledgeRate){
        this.weights = [0.5, 0.5, 0.5];
        this.alpha = knowledgeRate;
    }

    classify(x, y){
        let suma = 0;
        suma += x * this.weights[0] + y * this.weights[1] + this.weights[2];
        return this.f(suma);
    }

    f = (sum) => 1 / (1 + Math.exp(-sum));

    aprendiendo(x, y, isRight) {
        let val = this.classify(x, y);
        let error = isRight - val;
        this.weights[0] = this.weights[0] + this.alpha * error * x;
        this.weights[1] = this.weights[1] + this.alpha * error * y;
        this.weights[2] = this.weights[2] + this.alpha * error;
      }
}