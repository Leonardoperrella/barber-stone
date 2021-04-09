import { HowItWorksContainer, Card } from "./styles";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      color: "#65AFFF",
      text: "procure suas barbearias favoritas",
    },
    {
      step: 2,
      color: "#BB8C4B",
      text: "Veja tudo o que a barbearia oferece",
    },
    {
      step: 3,
      color: "#335C81",
      text: "Agende um horário presencial ou à domicílio*",
    },
  ];

  return (
    <>
      <HowItWorksContainer>
        <h1>Como funciona</h1>

        {steps.map((currentStep, index) => (
          <>
            <Card key={index} style={{ backgroundColor: currentStep.color }}>
              {currentStep.step}
            </Card>
            <h4>{currentStep.text}</h4>
          </>
        ))}

        <p>*conforme disponibilidade do estabelecimento</p>
      </HowItWorksContainer>
    </>
  );
};

export default HowItWorks;
