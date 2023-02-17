def dfs(num):
    if len(result) == m:
        print(" ".join(map(str, result)))
        return
    else:
        for i in range(1, n + 1):
            result.append(i)
            dfs(i + 1)
            result.pop()


n, m = map(int, input().split())
result = []
dfs(1)
