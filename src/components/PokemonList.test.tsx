import { beforeEach, describe, expect, test } from 'vitest'
import { graphqlService, server } from '../lib/test/setupMockServer'
import { renderHook, waitFor } from '@testing-library/react'
import { useFetchPokemonList } from './PokemonList'
import Provider from '../Provider'
import { HttpResponse } from 'msw'

const mockData = {
  name: 'kaen',
}

describe('Render PokemonList', () => {
  beforeEach(() => {
    // setup code
    server.use(
      graphqlService.operation<typeof mockData>(({ operationName }) => {
        console.log('[LOG SERVER] 🦊 operationName :', operationName)
        return HttpResponse.json({
          data: { ...mockData },
        })
      }),
    )
  })

  test('should fetch data from Hook', async () => {
    const { result } = renderHook(() => useFetchPokemonList(), {
      wrapper: Provider,
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(mockData)
  })
})
