import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Logo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const startGame = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Fast Foods Quiz</title>
      </Head>
      <QuizContainer>
        <Logo />
        <Widget>
          <Widget.Header>
            <h1>Fast Foods</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre fast foods e divirta-se criando o seu AluraQuiz</p>
            <form onSubmit={startGame}>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome :)"
                name="nomeDoUsuario"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>Jogar</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fbreuil/fastfood-quiz" />
    </QuizBackground>
  );
}
