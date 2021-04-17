import { HowItWorksContainer, Card, CardDiv } from "./styles";

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
      text: "Veja tudo o que ela te oferece",
    },
    {
      step: 3,
      color: "#335C81",
      text: "Agende o melhor horário para você",
    },
  ];

  return (
    <>
      <HowItWorksContainer id="como-funciona">
        <h1>Como funciona</h1>
        <CardDiv>
          {steps.map((currentStep, index) => (
            <div>
              <Card key={index} style={{ backgroundColor: currentStep.color }}>
                {currentStep.step}
              </Card>
              <h4>{currentStep.text}</h4>
            </div>
          ))}
        </CardDiv>
      </HowItWorksContainer>
    </>
  );
};

export default HowItWorks;
