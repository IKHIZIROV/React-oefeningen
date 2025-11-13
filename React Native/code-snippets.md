**Basic Fetch useEffect**

```typescript

  const [duckies, setDuckies] = useState<Duckie[]>([])
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {

    let cancelled = false;
    const fetchDuckies = async () => {
    setLoading(true)
      try {
        const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json")
        if (!response.ok) throw new Error ("Response is not ok!")
        if (cancelled) return;
        setDuckies(await response.json())

      } catch (e) {
        setError(e as Error)

      } finally {
        setLoading(false)

      }
    }
    fetchDuckies();

    return () => {
      cancelled = true;
    }
  }, []);

```