import React, { useState } from 'react'
import tw from 'twin.macro'
import Slider from './slider'

function Strength({ checkedState }) {
  const strArr = ['TOO WEAK!', 'TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG']
  const strNumber = checkedState.filter(item => item === true).length

  const message = strArr[strNumber]

  return (
    <div>
      {strNumber === 0 || strNumber === 1 ? (
        <div tw="flex flex-row items-center space-x-3">
          <span tw="text-cWhite text-2xl">{message}</span>
          <div tw="flex flex-row space-x-2">
            <div tw="h-[28px] w-[10px] bg-cRed"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
          </div>
        </div>
      ) : strNumber === 2 ? (
        <div tw="flex flex-row items-center space-x-3">
          <span tw="text-cWhite text-2xl">{message}</span>
          <div tw="flex flex-row space-x-2">
            <div tw="h-[28px] w-[10px] bg-cOrange"></div>
            <div tw="h-[28px] w-[10px] bg-cOrange"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
          </div>
        </div>
      ) : strNumber === 3 ? (
        <div tw="flex flex-row items-center space-x-3">
          <span tw="text-cWhite text-2xl">{message}</span>
          <div tw="flex flex-row space-x-2">
            <div tw="h-[28px] w-[10px] bg-cYellow"></div>
            <div tw="h-[28px] w-[10px] bg-cYellow"></div>
            <div tw="h-[28px] w-[10px] bg-cYellow"></div>
            <div tw="h-[28px] w-[10px] border-2 border-cWhite"></div>
          </div>
        </div>
      ) : (
        <div tw="flex flex-row items-center space-x-3">
          <span tw="text-cWhite text-2xl">{message}</span>
          <div tw="flex flex-row space-x-2">
            <div tw="h-[28px] w-[10px] bg-cGreen"></div>
            <div tw="h-[28px] w-[10px] bg-cGreen"></div>
            <div tw="h-[28px] w-[10px] bg-cGreen"></div>
            <div tw="h-[28px] w-[10px] bg-cGreen"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function PasswordGen() {
  const characters = [
    { name: 'uppercase', label: 'Include Uppercase Letters' },
    { name: 'lowercase', label: 'Include Lowercase Letters' },
    { name: 'numbers', label: 'Include Numbers' },
    { name: 'symbols', label: 'Include Symbols' },
  ]

  const [length, setLength] = useState(0)
  const [checkedState, setCheckedState] = useState(
    new Array(characters.length).fill(false),
  )
  const [password, setPassword] = useState('')

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    )

    setCheckedState(updatedCheckedState)
  }

  const generatePassword = () => {
    let characters = ''
    let generatedPassword = ''

    if (checkedState[0]) {
      characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    if (checkedState[1]) {
      characters = characters.concat('abcdefghijklmnoprstuvwxyz')
    }
    if (checkedState[2]) {
      characters = characters.concat('0123456789')
    }
    if (checkedState[3]) {
      characters = characters.concat('!@#$%^&*()_+-={}[]:";,./')
    }

    for (let i = 0; i < length; i++) {
      generatedPassword +=
        characters[Math.floor(Math.random() * characters.length)]
    }

    setPassword(generatedPassword)
  }

  return (
    <div tw="flex flex-col items-center w-[340px] h-[540px] sm:w-[540px] sm:h-[695px] bg-vdGrey space-y-6">
      <h2 tw="text-base text-cGrey sm:text-2xl">Password Generator</h2>
      {/* Results container */}
      <div tw="flex flex-row items-center justify-between h-16 sm:h-[80px] w-full bg-dGrey px-6">
        <span tw="text-2xl text-cWhite">{password}</span>
        <button tw="">
          <img src="/images/icon-copy.svg" alt="clipboard" />
        </button>
      </div>
      {/* Bottom Container */}
      <div tw="flex flex-col h-full w-full bg-dGrey px-4 py-4 sm:py-8 sm:px-8">
        <div tw="flex flex-row justify-between items-center mb-4 sm:mb-8">
          <span tw="text-cWhite sm:text-lg">Character Length</span>
          <span tw="text-cGreen text-2xl">{length}</span>
        </div>
        <div tw="mb-16">
          <Slider onChange={value => setLength(value)} />
        </div>
        <ul tw="flex flex-col content-center space-y-2 mb-6 sm:mb-10">
          {characters.map(({ name, label }, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  tw="accent-cGreen rounded-none w-4 h-4 mr-4"
                  id={`checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  tw="text-cWhite sm:text-lg"
                >
                  {label}
                </label>
              </li>
            )
          })}
        </ul>
        <div tw="flex flex-row justify-between items-center h-[56px] sm:h-[72px] px-4 bg-vdGrey mb-4 sm:mb-8">
          <span tw="text-cGrey sm:text-lg">STRENGTH</span>
          <Strength checkedState={checkedState} />
        </div>
        <div>
          <button
            tw="bg-cGreen h-[56px] sm:h-[72px] w-full flex flex-row items-center justify-center sm:text-lg"
            onClick={generatePassword}
          >
            GENERATE{' '}
            <img tw="ml-4" src="/images/icon-arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
