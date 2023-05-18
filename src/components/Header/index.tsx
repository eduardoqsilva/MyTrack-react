import { BookmarkSimple } from "@phosphor-icons/react";
import { FormOverlay, HeaderContainer, InputRatio, OverlayWrapper, WrapperRatio } from "./header.styled";
import { colors } from "../../styles/variables";
import { FormEvent, useState } from "react";


interface HeaderType {
  cod: string | undefined
  transport: string | undefined
}

export function Header({ cod, transport }: HeaderType) {

  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [show, setShow] = useState(false)

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();
    setShow(false);
    const valueStorage = () => {
      const valueLocal = localStorage.getItem('saved');
      if (valueLocal !== null) {
        return valueLocal;
      }
    };

    if (valueStorage()) {
      localStorage.setItem(
        'saved',
        JSON.stringify([
          ...JSON.parse(valueStorage() || '[]'),
          {
            category: category,
            title: title,
            cod: cod,
          },
        ])
      );
    } else {
      localStorage.setItem(
        'saved',
        JSON.stringify([
          {
            category: category,
            title: title,
            cod: cod,
          },
        ])
      );
    }

  }

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <h1>Rastreio {transport}</h1>
          <button onClick={() => setShow(true)}>
            <BookmarkSimple
              size={32}
              color={colors.blu}
            />
          </button>
        </div>
        <span>{'NL549242085BR'}</span>
      </HeaderContainer>

      <OverlayWrapper $show={show}>
        <FormOverlay onSubmit={handleOnSubmit}>
          <h2>Salvar rastreio</h2>
          <input
            type="text"
            placeholder="Nome do produto"
            required
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <h3>Categoria:</h3>
          <WrapperRatio>
            <InputRatio
              name="select"
              value={'tecnologia'}
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'roupas'}
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'comida'}
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'geral'}
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
          </WrapperRatio>
          <button type="submit">Salvar Encomenda</button>
        </FormOverlay>
      </OverlayWrapper>
    </>
  )
}