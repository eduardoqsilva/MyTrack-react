import { BookmarkSimple } from "@phosphor-icons/react";
import { FormOverlay, HeaderContainer, InputRatio, OverlayWrapper, WrapperRatio } from "./header.styled";
import { colors } from "../../styles/variables";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface HeaderType {
  cod: string | undefined
  transport: string | undefined
}
interface Item {
  cod: string;
}

export function Header({ cod, transport }: HeaderType) {

  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [show, setShow] = useState(false)
  const [saved, setSaved] = useState(false)
  const Navigate = useNavigate()


  useEffect(() => {
    if(show) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 20)
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = ''
    }
  }, [show])

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
      Navigate('/')
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
      Navigate('/')
    }

  }

  useEffect(() => {
    const valueText = localStorage.getItem('saved')

    if(valueText) {
      const SavedItems:Item[] = JSON.parse(valueText)
      const saves = SavedItems.filter(item => item.cod === cod)
      setSaved(saves.length > 0)
    }
  }, [cod])

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <h1>Rastreio {transport}</h1>
          <button onClick={() => setShow(true)} disabled={saved} >
            <BookmarkSimple
              size={32}
              color={colors.blu}
              weight={saved ? 'fill' : 'regular'}
            />
          </button>
        </div>
        <span>{cod}</span>
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
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'roupas'}
              required
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'comida'}
              required
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.currentTarget.value)}
            />
            <InputRatio
              name="select"
              value={'geral'}
              required
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.currentTarget.value)}
            />
          </WrapperRatio>
          <button type="submit">Salvar Encomenda</button>
        </FormOverlay>
      </OverlayWrapper>
    </>
  )
}