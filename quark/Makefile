CC= g++  	

# include debugging symbols in object files,
# and enable all warnings
CXXFLAGS= -g -Wall -std=c++11

INCLUDE_FLAGS= -I ~/curlcpp/include -I /opt/local/include
LIB_FLAGS= -L/opt/local/lib -lcurl
#include debugging symbols in executable
LDFLAGS= -g

quark: curltest.cpp 
	$(CC) $(CXXFLAGS) $(LDFLAGS) $(INCLUDE_FLAGS) $(LIB_FLAGS) curltest.cpp -o quark
