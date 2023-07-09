import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import cardData from "../data/cardData.json"
import TaskCard from "../components/TaskCard"

const ReduceCarbonFootprint = () => {
    console.log(cardData);
  return (
    <>
      <Box>
        <Text
          color={"#000000"}
          fontWeight={500}
          fontSize={"30px"}
          display={"flex"}
          justifyContent={"center"}
        >
          TASKS
        </Text>
        {cardData.map((data)=>{
            return <TaskCard data={data}/>
        })}
      </Box>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is carbon emission?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Carbon emissions refer to the release of carbon dioxide (CO2) and
              other greenhouse gases into the atmosphere as a result of human
              activities, primarily the burning of fossil fuels such as coal,
              oil, and natural gas. These emissions contribute to the greenhouse
              effect, trapping heat in the Earth's atmosphere and leading to
              global warming and climate change. Carbon emissions are a major
              driver of environmental degradation and efforts to reduce them are
              crucial in mitigating the impacts of climate change.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How to reduce carbon emission?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Reducing carbon emissions is essential for mitigating climate
              change and protecting the environment. Here are some effective
              ways to contribute to carbon emission reduction:
              <ol>
                <li>
                  Transition to renewable energy: Use renewable energy sources
                  such as solar, wind, or hydroelectric power instead of fossil
                  fuels. Installing solar panels, supporting clean energy
                  initiatives, and advocating for renewable energy policies can
                  make a significant impact.
                </li>
                <li>
                  Energy efficiency: Improve energy efficiency in your home,
                  workplace, and transportation. Replace traditional light bulbs
                  with energy-efficient LED bulbs, insulate buildings, use
                  energy-saving appliances, and opt for fuel-efficient vehicles
                  or carpooling.
                </li>
                <li>
                  Reduce, reuse, recycle: Minimize waste by adopting a
                  sustainable lifestyle. Reduce consumption, reuse items
                  whenever possible, and recycle materials to conserve resources
                  and reduce the energy needed for manufacturing new products.
                </li>
                <li>
                  Sustainable transportation: Opt for eco-friendly
                  transportation methods such as walking, cycling, or using
                  public transportation whenever feasible. If you need a car,
                  consider electric or hybrid vehicles that produce fewer
                  emissions.
                </li>
                <li>
                  Support green initiatives: Encourage and support
                  organizations, businesses, and governments that prioritize and
                  invest in sustainable practices and technologies. This can
                  include lobbying for renewable energy policies, advocating for
                  public transportation, and participating in local
                  environmental initiatives.
                </li>
                <li>
                  Plant trees and protect forests: Trees and forests act as
                  natural carbon sinks, absorbing CO2 from the atmosphere.
                  Engage in reforestation efforts, participate in tree planting
                  campaigns, or support organizations dedicated to forest
                  conservation.
                </li>
                <li>
                  Conscious consumption: Make informed choices by opting for
                  environmentally friendly products and services. Consider the
                  carbon footprint of what you purchase, support sustainable and
                  ethical businesses, and reduce your reliance on single-use
                  plastics.
                </li>
                <li>
                  Spread awareness: Educate others about the importance of
                  reducing carbon emissions and the impact of individual
                  actions. Encourage friends, family, and your community to join
                  in sustainable practices and take part in environmental
                  initiatives.
                </li>
              </ol>
              Remember, collective action is vital to combat climate change. By
              making small changes in our daily lives and advocating for broader
              systemic changes, we can contribute to significant carbon emission
              reduction and create a more sustainable future.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default ReduceCarbonFootprint;
