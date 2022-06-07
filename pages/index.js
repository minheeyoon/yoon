import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Card,
  Grid,
  Text,
  Spacer,
  Avatar,
} from "@nextui-org/react";
import { Horse, Heart, Cube } from "phosphor-react";

export default function Home({ home, posts }) {
  // 메인 포스트
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug === !home.mainPostUrl);

  console.log(mainPost);
  console.log(otherPost);

  return (
    <div className={styles.container}>
      <Container>
        <Spacer y={2} />

        <Row justify="center" align="center">
          Pretendard...Pretendard... NextUI gives you the best developer
          experience with all the features you need for building beautiful and
          modern websites and applications. SEED...SEED... I'm Tired. I'm
          Tired... 제주도...제주도...더미텍스트...더미텍스트.... 기강...기강...
        </Row>

        <Spacer y={2} />

        <Col>
          <Link href="/">
            <a>
              <div>
                <Horse size={52} />
                <Heart color="#ff5600" weight="fill" size={52} />
                <Cube color="#ff5600" weight="duotone" size={52} />
              </div>
            </a>
          </Link>
        </Col>
        <Spacer y={5} />
        <Card
          isPressable
          // isHoverable
          variant="flat"
          css={{ p: "$6", mw: "100%" }}
        >
          <Card.Header>
            <Avatar
              squared
              src="https://ih1.redbubble.net/image.258477200.5005/flat,800x800,075,f.u1.jpg"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  YENI
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>fun-cool-sexy</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>세상은</Text>
          </Card.Body>
        </Card>

        <Spacer y={1} />
        <Card
          isPressable
          // isHoverable
          variant="flat"
          css={{ p: "$6", mw: "100%" }}
        >
          <Card.Header>
            <Avatar
              squared
              src="https://blog.kakaocdn.net/dn/cg5LCG/btqVH98SvGc/hfw9ZE1Khl8k8knK2Ibda1/img.jpg"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Journy K
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>killer k</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>요 지경</Text>
          </Card.Body>
        </Card>
        <Spacer y={1} />
        <Card
          isPressable
          // isHoverable
          variant="flat"
          css={{ p: "$6", mw: "100%" }}
        >
          <Card.Header>
            <Avatar
              squared
              src="https://avatars.githubusercontent.com/u/43980992?v=4"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  VAN
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>tired person</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>요 지경 속이다</Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}
