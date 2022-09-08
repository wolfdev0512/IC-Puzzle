// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  height: 100%;
  padding: 32px 0;
  box-sizing: border-box;
`

export const Iconlayout = styled.div<{ flag?: boolean }>`
  width: 20px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: 4;

  right: 0;
  top: calc(50% - 25px);
  cursor: pointer;
  transition: 0.2s;
  ${({ flag }) =>
    flag
      ? `
  transform: translateX(-50%) rotate(180deg);
`
      : `
        transform: rotate(0deg) translateX(-50%);
`}
`

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding-right: 35px;
`

export const Tools = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 2;
  background: #cecece;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const ItemLayout = styled.div<{ flag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  padding: 5px 15px;
  box-sizing: border-box;
  transition: 0.2s;
  border-radius: 10px;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ flag }) =>
    flag
      ? `border-color: #979797;
          transition: .2s;`
      : ""}
`

export const Icon = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: flex;
  }
`

export const Tab = styled.div<{ flag: boolean }>`
  position: relative;
  border-radius: 10px;
  opacity: 0;
  margin-top: -15rem;
  pointer-events: none;
  background: #cecece;
  transition: 0.3s;
  height: 55%;

  ${({ flag }) =>
    flag
      ? `opacity: 1;
        margin-top: 10px;
        pointer-events: auto;
        transition: .3s;`
      : ""};
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Puzzles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`
export const PuzzleItem = styled.div<{ flag: boolean }>`
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 60px;
  height: 60px;
  ${({ flag }) =>
    flag
      ? `pointer-events: none;
        opacity: .5;`
      : ""}
`
export const Layers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 230px;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`
export const LayerItem = styled.div`
  width: 200px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`
export const LayerImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
`
