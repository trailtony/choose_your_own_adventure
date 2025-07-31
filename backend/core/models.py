from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field



class StoryOptionLLM(BaseModel):
    text: str = Field(description="the text of the option shown to the user")
    nextNode: Dict[str, Any] = Field(description="the next node content and its options")


class StoryNodelLLM(BaseModel):
    content: str = Field(description="The main content of the stroy node")
    isEnding: bool = Field(description="Whether this node is an ending node")
    isWinningEnding: bool = Field(description="the text of the option shown to the user")
    options: Optional[List[StoryOptionLLM]] = Field(default=None, description="The options for this node")


class StoryLLMResponse(BaseModel):
    title: str = Field(description="The title of the story")
    root_node: StoryNodelLLM = Field(description="The title of the story")
