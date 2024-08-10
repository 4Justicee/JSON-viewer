import React from "react";
import { AspectRatio, Container, Flex, Paper, SegmentedControl, Stack, Title } from "@mantine/core";

const features = [
  {
    label: "Fast & Compact",
    value: "1",
  },
  {
    label: "Search",
    value: "2",
  },
  {
    label: "Edit",
    value: "3",
  },
  {
    label: "Customize",
    value: "5",
  },
  {
    label: "Compare",
    value: "6",
  },
  {
    label: "AI-Powered Assistant",
    value: "7",
  },
];

export const PremiumPreview = () => {
  const [selectedFeature, setSelectedFeature] = React.useState("1");

  return (
    <Container component="section" id="preview" fluid>
      <Container size="xl">
        <Title
          fz={{
            base: 32,
            xs: 38,
          }}
          order={2}
          mt={100}
          mb={60}
        >
          Discover the features
        </Title>
        <Flex
          gap="lg"
          direction={{
            base: "column",
            xs: "row",
          }}
          justify="center"
        >
          <Stack>
            <SegmentedControl
              data={features}
              value={selectedFeature}
              onChange={setSelectedFeature}
              orientation="vertical"
              withItemsBorders={false}
              bg="transparent"
              color="dark"
              size="lg"
              visibleFrom="sm"
              styles={{
                control: {
                  background: "rgba(168, 168, 168, 0.2)",
                  borderRadius: "4px",
                },
                root: {
                  gap: "24px",
                },
              }}
            />
          </Stack>
          <Stack w="100%">
            <Paper
              p={0}
              w="100%"
              maw={1440}
              h="fit-content"
              radius="lg"
              shadow="xl"
              bg="transparent"
              style={{
                overflow: "hidden",
                border: "1px solid #c1c1c1",
                outline: "1px solid #c1c1c1",
                outlineOffset: "4px",
              }}
            >
              <AspectRatio ratio={1440 / 760} maw={1440} w="100%" h="100%">
                <video
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                  poster={`./assets/preview/${selectedFeature}.webp`}
                  key={selectedFeature}
                  style={{ display: "block" }}
                >
                  <source
                    src={`https://app.jsoncrack.com/assets/videos/p${selectedFeature}.mp4`}
                    type="video/mp4"
                  />
                </video>
              </AspectRatio>
            </Paper>
          </Stack>
        </Flex>
      </Container>
    </Container>
  );
};
