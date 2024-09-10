import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { BarChart, Boxes, CircleSlash2, Computer, Cpu } from "lucide-react";
import Image from "next/image";

function FeatureCards() {
  // TODO: make this an array of objects
  // take props - title, desc, image, etc.
  return (
    <>
      <div className="flex flex-col md:flex-row w-100 gap-3 md:mt-10 mb-20">
        {/* Column 1*/}
        <div className="flex flex-col w-100 md:w-50 max-w-[100%] md:max-w-[50%] gap-4">
          {/* Team collaboration */}
          <Card>
            <CardHeader>
              <Cpu className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                Team collaboration
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Collaborate on a Notion-like interface to define your LLM app
                requirements. Attach docs, data, and examples to ensure your
                prompts achieve high precision results.
              </p>
            </CardContent>
          </Card>

          {/* Effortless deployment */}
          <Card>
            <CardHeader>
              <MagicWandIcon className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                Integrate Pype SDK in 4 lines of code.
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Autogenerate your prompts and test examples. Compare selected
                prompts across models, parameters and prompt techniques.
              </p>
              <Image
                alt="code"
                src="/images/code.webp"
                className="w-full mt-10 rounded"
                height={900}
                width={900}
                quality={100}
              />
            </CardContent>
          </Card>

          {/* Monitor deployed prompts */}
          <Card>
            <CardHeader>
              <Boxes className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                Monitor deployed prompts
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Robust observability tools provide real-time metrics— cost,
                latency, requests, accuracy and 10+ metrics.
              </p>
              <Image
                alt="code"
                src="/images/analytics.webp"
                className="w-full mt-10 rounded"
                height={900}
                width={900}
                quality={100}
              />
            </CardContent>
          </Card>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col w-100 md:w-50 max-w-[100%] md:max-w-[50%] gap-4">
          {/* Accelerated prompt development */}
          <Card>
            <CardHeader>
              <Computer className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                Accelerated prompt development
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Autogenerate your prompts and test examples. Compare selected
                prompts across models, parameters and prompt techniques.
              </p>
            </CardContent>
          </Card>

          {/* Evaluate and Auto Optimize prompts */}
          <Card>
            <CardHeader>
              <BarChart className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                Evaluate and Auto Optimize prompts
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Evaluate and pick the best performing prompt. Auto-Tune prompts
                to improve accuracy and consistency of the results.
              </p>
              <Image
                alt="code"
                src="/images/graph.jpg"
                className="w-full mt-10 rounded"
                height={900}
                width={900}
                quality={100}
              />
            </CardContent>
          </Card>

          {/* No expertise required */}
          <Card>
            <CardHeader>
              <CircleSlash2 className="w-10 h-10 mb-6" />
              <CardTitle className="text-xl font-medium">
                No expertise required
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                No need to learn 50+ prompting techniques to improve prompts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FeatureCards;
