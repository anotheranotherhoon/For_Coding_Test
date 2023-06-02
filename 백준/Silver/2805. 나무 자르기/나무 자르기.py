from sys import stdin
n,m = map(int, stdin.readline().split())
data = list(map(int, stdin.readline().split()))
start=0
end=max(data)
result=0
while start<=end:
	total=0
	mid=(start+end)//2
	for i in data:
		if i > mid:
			total+=i-mid
	if total < m:
		end = mid-1
	else:
		result = mid
		start = mid+1
print(result)